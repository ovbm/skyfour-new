import React from 'react';
import styled from 'styled-components';
import SyncLoader from 'react-spinners/SyncLoader';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import theme from '../utils/themeconstants';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: {},
      email: '',
      name: '',
      isValidEmail: true,
      isSending: false,
    };
  }

  sendApplication = async (formData) => {
    this.setState({ isSending: true });
    // eslint-disable-next-line no-undef
    const res = await fetch(
      'https://europe-west1-iovi-205808.cloudfunctions.net/skyfouremail',
      {
        method: 'POST',
        body: formData,
      },
    );
    return res;
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let emptyFields = false;
    const { name, message, email, empty } = this.state;

    // check if any required fields are empty
    if (!name) {
      empty.name = true;
      this.setState({ status: 'required' });
      emptyFields = true;
    }
    if (!email) {
      empty.email = true;
      this.setState({ status: 'required' });
      emptyFields = true;
    }
    if (!message) {
      empty.message = true;
      this.setState({ status: 'required' });
      emptyFields = true;
    }
    // check if email is valid
    // eslint-disable-next-line no-useless-escape
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const isValidEmail = regex.test(email);
    this.setState({ isValidEmail });
    if (!isValidEmail) {
      return;
    }

    // send if no field is empty
    if (!emptyFields) {
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      this.sendApplication(formData)
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              status: 'success',
              isSending: false,
            });
            trackCustomEvent({
              category: 'email',
              action: 'sent',
              label: 'Form Email',
              value: 50,
            });
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            status: 'error',
            isSending: false,
          });
        });
    }
  };

  handleInputChange = (event) => {
    const { target } = event;
    console.log(target.id);
    this.setState((prevState) => ({
      empty: {
        ...prevState.empty,
        [target.id]: false,
      },
      [target.id]: target.value,
    }));
  };

  render() {
    const { className, buttonClassName } = this.props;
    const { status, empty, email, isValidEmail, isSending } = this.state;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className={className}
        enctype="multipart/form-data"
      >
        <Field required>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            key="name"
            onChange={this.handleInputChange}
            defaultValue=""
            aria-label="name input"
            type="text"
            empty={empty.name}
          />
        </Field>
        <Field required>
          <label htmlFor="email">
            Email
            {!isValidEmail ? <ErrorLabel>Enter valid email</ErrorLabel> : null}
          </label>
          <Input
            id="email"
            key="email"
            onChange={this.handleInputChange}
            defaultValue={email}
            aria-label="email input"
            type="text"
            empty={empty.email || !isValidEmail}
          />
        </Field>
        <Field required>
          <label htmlFor="message">Nachricht </label>
          <TextArea
            rows="6"
            id="message"
            form="usrform"
            onChange={this.handleInputChange}
            placeholder="Datum, Ort, gewünschte
            Spieldauer und spezielle Musikwünsche helfen uns ihnen eine individuelle Offerte zu erstellen."
            empty={empty.message}
          />
        </Field>
        <Field>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <StyledSubmit
              id="submit"
              value="Offerte Anfragen"
              type="submit"
              title="Offerte Anfragen"
              color={theme.colors.blue}
              className={buttonClassName}
              aria-label="submit"
              disabled={isSending}
            />
            <SyncLoader
              color={theme.colors.blue}
              loading={isSending}
              size={8}
            />
          </div>
        </Field>
        <AlertMessage>
          {status === 'sending' && <p>Wird gesendet...</p>}
          {status === 'required' && (
            <p>Bitte fülle Sie alle benötigten Felder aus.</p>
          )}
          {status === 'success' && (
            <p>
              Vielen Dank für Ihre Anfrage, wir melden uns umgehend bei Ihnen.
            </p>
          )}
        </AlertMessage>
      </Form>
    );
  }
}

const Form = styled.form`
  position: relative;
  margin: 0;
  border-radius: 8px;
  padding: ${theme.space.lg}px;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: ${theme.space.md}px;
  }
`;

const Field = styled.div`
  padding: 8px 0;
  margin: 0;
  overflow: visible;
  label {
    &::before {
      content: ${(props) => (props.required ? '""' : null)};
      width: 6px;
      height: 6px;
      background: ${theme.colors.blue};
      display: inline-block;
      margin: 0 10px 3px 0;
      border-radius: 50%;
    }
  }
`;

const Input = styled.input`
  border-radius: 4px;
  background-color: ${theme.colors.bgSecondary};
  border: ${(props) => (props.empty ? `1px solid ${theme.colors.red}` : 0)};
  margin-top: 8px;
  padding: 5px 20px 8px 13px;
  transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    background-color: ${theme.colors.bgPrimary};
    box-shadow: 0 0 0 2px ${theme.colors.bgSecondary};
  }
`;

const ErrorLabel = styled.span`
  font-size: 0.5em;
  color: ${theme.colors.red};
  padding: 0 0 0 8px;
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  background-color: ${theme.colors.bgSecondary};
  border: 0;
  margin-top: 8px;
  padding: 5px 20px 8px 13px;
  transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    background-color: ${theme.colors.bgPrimary};
    box-shadow: 0 0 0 2px ${theme.colors.bgSecondary};
  }
`;

const AlertMessage = styled.div`
  width: 100%;
  p {
    background-color: transparent;
    color: black;
    font-size: 14px;
    margin: 0 auto;
    padding: 2px 0 9 1em;
  }
`;

const StyledSubmit = styled.input`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  color: ${(props) =>
    props.color === 'white' || props.color === '#FFFFFF'
      ? theme.colors.primary
      : 'white'};
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  align-self: center;
  vertical-align: middle;
  margin: 1em 1em 1em 0;
  white-space: nowrap;
  text-align: center;
  padding: 4px 16px;
  text-decoration: none;
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

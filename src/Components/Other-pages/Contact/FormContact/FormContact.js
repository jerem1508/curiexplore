import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

/* SCSS */
import classes from './FormContact.scss';

function onChange() {
}

/**
 * FormContact component
 * Url :
 * Description : Formulaire de contact : label, input, textarea, btn submit,reCaptcha, text
 * Responsive : .
 * Accessible : .
 * Tests unitaires : .
 */

const Contact = props => (
  <form action="#">
    <div className="row">
      <div className={`col-lg-5 ${classes.FormContact}`}>
        <label htmlFor={props.name}>
          <div className={classes.Texte}>
            text
          </div>
          <input className="form-control" type="text" placeholder="Ex: Péglion Jéremy" id={props.name} name={props.name} required />
        </label>
        <label htmlFor={props.organisation}>
          <div className={classes.Texte}>
            text
          </div>
          <input className="form-control" type="text" placeholder="Ex: Institut Pasteur" id={props.organisation} name={props.organisation} required />
        </label>
        <label htmlFor={props.fonction}>
          <div className={classes.Texte}>
            text
          </div>
          <input className="form-control" type="text" placeholder="Ex: Directeur de Centre" id={props.fonction} name={props.fonction} required />
        </label>
        <label htmlFor={props.email}>
          <div className={classes.Texte}>
            text
          </div>
          <input className="form-control" type="email" placeholder="Ex: jerem@gmail.com" id={props.email} name={props.email} required />
        </label>
      </div>
      <div className={`col-lg-7 ${classes.FormContact}`}>
        <label htmlFor={props.message}>
          <div className={classes.Texte}>
            text
          </div>
          <textarea className="form-control" placeholder="..." id={props.message} name={props.message} required />
        </label>
      </div>
    </div>
    <div className="row">
      <div className={`col-lg-5 ${classes.FormContact}`}>
        <div className={classes.Texte}>
          text
        </div>
      </div>
      <div className={`col-lg-7 ${classes.FormContact}`}>
        <div className="form-inline mt-n1">
          <div className={`col-lg ${classes.recaptcha}`}>
            <ReCAPTCHA
              size="normal"
              sitekey="6LdcrqQUAAAAAGvHkaE0VyK1uFdboJbsQqJBevMm"
              onChange={onChange}
            />
          </div>
          <button type="submit" value="send" className="btn col-lg">
            <div className="col-8 text-left">
              text
            </div>
            <div className="col-4 text-right">
              <i className="fas fa-paper-plane" color="white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
  fonction: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

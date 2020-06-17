import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../Copyright';
import { register } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const signupValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().min(6, 'Password must contain atleast 6 characters').required('Password is required'),
});

const Signup = ({ register }) => {
  const classes = useStyles();
  const credentials = {
    username: '',
    password: ''
  };

  return (
		<Fragment>
			<Avatar className={classes.avatar}>
				<PersonAddRoundedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<Formik
				initialValues={credentials}
				validationSchema={signupValidationSchema}
				onSubmit={(values, { setSubmitting }) => {
					const { username, password } = values;
					register(username, password);
					setSubmitting(false);
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<FormControl
							fullWidth
							{...(errors.username && touched.username
								? { error: true }
								: {})}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoFocus
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
								{...(errors.username && touched.username
									? { error: true }
									: {})}
								aria-describedby="username-helper-text" />
							<FormHelperText
								id="username-helper-text"
								{...(errors.username && touched.username
									? { style: { display: 'block' } }
									: {})}>
								<ErrorMessage name="username">{msg => msg}</ErrorMessage>
							</FormHelperText>
						</FormControl>
						<FormControl
							fullWidth
							{...(errors.password && touched.password
								? { error: true }
								: {})}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								{...(errors.password && touched.password
									? { error: true }
									: {})}
								aria-describedby="password-helper-text" />
							<FormHelperText
								id="password-helper-text"
								{...(errors.password && touched.password
									? { style: { display: 'block' } }
									: {})}>
							<ErrorMessage name="password">{msg => msg}</ErrorMessage>
						</FormHelperText>
						</FormControl>
						<Button
							type="submit"
							fullWidth
							disabled={isSubmitting}
							variant="contained"
							color="primary"
							className={classes.submit}>
							Sign Up
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/auth/login">
									<Typography variant="body2">
										{"Already have an account? Login"}
									</Typography>
								</Link>
							</Grid>
					</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
				</form>
				)}
			</Formik>
		</Fragment>
  );
}

Signup.propTypes = {
  register: PropTypes.func.isRequired,
}

export default connect(
  null,
  { register },
)(Signup);

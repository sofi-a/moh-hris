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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../Copyright';
import { login } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const Login = ({ login }) => {
  const classes = useStyles();
  const credentials = {
    username: '',
	password: '',
	remember: false,
  };

  return (
		<Fragment>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
			<Formik
				initialValues={credentials}
				validationSchema={loginValidationSchema}
				onSubmit={(values, { setSubmitting }) => {
					const { username, password, remember } = values;
					login(username, password, remember);
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
								autoComplete="username"
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
								autoComplete="current-password"
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
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
							name="remember"
							value={values.remember}
							onChange={handleChange}
							onBlur={handleBlur} />
						<Button
							type="submit"
							fullWidth
							disabled={isSubmitting}
							variant="contained"
							color="primary"
							className={classes.submit}>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/auth/register">
									<Typography variant="body2" align="right">
										{"Don't have an account? Sign Up"}
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default connect(
  null,
  { login },
)(Login);

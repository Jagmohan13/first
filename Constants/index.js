const Boom = require('boom');

module.exports = {
  version: '/v1',
  key: {
    PRIVATE_KEY: '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAz7pZEypvrFJCDshsbOamj9bmy/dXnUOyCo5b3xSvvTNIoFAC\n5ePXozCD/5Byih1JB6ZYE6OceEW6oArkPzZOl8bFBlqV9k30oerMtVei18+CfF/u\nFLWlJXs9FvXrRTKtsL43OmpLCH3LdzK9/+ZqhEx/TShp3JudUWuRW8ALqrBd8QW5\nCWJHYozYVaIpFzwJ9KW6fJ9GpZfcToCOquLWo8iINnAovXmvcAtdmzgIqoucD988\nf9oerll/CubJLy2rOiyeRvsAYouoefoyQZWN8IYPlnb5IB6Z7qnVL6rZz44dAjVw\nS3uARW3lxpfeZn3TN7wpPkBssGBF0OSEHNrXVwIDAQABAoIBAC8HHCVnpRKZKNVZ\n8JoS+cB0wZmJrK8w5TzYj9oIP+UQmC+bDZzoISiT0j5ogFXeXWs68JO5pbHg72hO\nLvBUpiRcXryag3rYmTqTArdHWNmM5BiuSyMrIHFE3ka1dAcdew8ZcT1rVQNeH1Mk\nDLnDe3fqLaPVM2o7XLlTJfxklP+WN6xWhBgDVgEawneo5svdgblYhg3u7cb4fsHg\ncAf0sCYraVuqcUHa/AUVOx7n5U39x3ShOvOQvFlWEDD6uN4Yg/twW2UyfFDWD57p\n2oPIEf06wOOu2XylPQwEU9w92Fr4yNqk0xksn8sOjbRyEPZncpDICsPTo1nsrz+R\n0AcwWUkCgYEA7DfUujbbg6WrfSOyS718kTeej0Il5z19JYu11g+Sis4r8RWbT92q\nweCp4dCGCpJrsPbs4+s4hT42sKfjUcUy5ZCGTDturQNbhH0RGxPp1KUTrytzdph8\n4mqpCVYcN1AmLCCA0WtFqJ53taWuipcLtU48ZRC4jHI+stUSNCtaE8UCgYEA4R+6\nx5mUjOWAK8GSTgHMWa72KqaxR/osYwmMPtHtjIFm1aOElQaXbGlZKd3dR5Tnw/4R\n8hO/gJc+eQeaPGhri0IVmG66JNTw8q0M0Qd+l0OrarYS5c09XzjAUdGOatstsaNE\nrhgRG90HvVYt0cHyKRa/C4+CnEBod/EoS/UnhGsCgYB5wT1Qzj3PWXFPCzs3du/i\nGf0Mclf/HN6In76WG2i5SxOzLCPlwqflTtvBnS25/Uas7FmmEPQNGcguvhqZZz+Y\nvCm82VVusDBX1e8fOeBozr2aqJbXJjoYqkl+mnfoutMyI37Ccrxw8V1ar4+Lt9c9\nGJpgrYGyQqC2pMTBRyci0QKBgHxc9uXE5ddgAQorCROm0qjIipzNMSo9/b9ISv15\nIu13nsNubZOV7JirKeKC+fbNP6t585fzaNs0sgJSPNYaKS7o9t0abiJisCifiHEA\n3uHZNBzjMFVaqAiuZS/NwAsvwXJca1hxWyI1XE0wCmfR6GDie+96/AAtZIi95DDx\n4T65AoGBAIE5LSP+glxJEd8jU/qc80D/dXf6icURyYDGARw8mziAgw6fL9cwbmqb\nIGDxP1ke2FA8OZ0W4VybRi9UcprenvADYpPb+CPZv4gxGoDFg0Bb/JcFUKL29hC1\nsteX0GR4TKYNeXLC+zz7Qr0DzhpqRswSyHG5GckkIRdgHx4l/Uza\n-----END RSA PRIVATE KEY-----',
    PUBLIC_KEY: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz7pZEypvrFJCDshsbOam\nj9bmy/dXnUOyCo5b3xSvvTNIoFAC5ePXozCD/5Byih1JB6ZYE6OceEW6oArkPzZO\nl8bFBlqV9k30oerMtVei18+CfF/uFLWlJXs9FvXrRTKtsL43OmpLCH3LdzK9/+Zq\nhEx/TShp3JudUWuRW8ALqrBd8QW5CWJHYozYVaIpFzwJ9KW6fJ9GpZfcToCOquLW\no8iINnAovXmvcAtdmzgIqoucD988f9oerll/CubJLy2rOiyeRvsAYouoefoyQZWN\n8IYPlnb5IB6Z7qnVL6rZz44dAjVwS3uARW3lxpfeZn3TN7wpPkBssGBF0OSEHNrX\nVwIDAQAB\n-----END PUBLIC KEY-----',

  },
  errorMessage: {
    passwordNotMatched:Boom.badRequest('Password Not Matcehd'),
    emailExist: Boom.badRequest('Email Already exist'),
    mobileExist: Boom.badRequest('Mobile Already exist'),
    userNameExist: Boom.badRequest('Username Already exist'),
    deviceTokenMissing: Boom.badRequest('Device token missing'),
    loginDetailMissing: Boom.badRequest('Login detail missing'),
    loginDetailWrong: Boom.notFound('Wrong Login Credentials'),
    mobileOTPIssue: Boom.badRequest('Seems, you entered wrong otp'),
    mobileAlreadyVerified: Boom.badRequest('Your mobile has been already verified'),
    emailAlreadyVerified: Boom.badRequest('Your email has been already verified'),
    emailTokenIssue: Boom.badRequest('Seems, this link has been already expired'),
    localeExist: Boom.conflict('Locale Already exist'),
    messageKeyExist: Boom.conflict('Message key Already exist'),
    passwordEncryptFailed: Boom.expectationFailed('Password encryption failed.'),
    invalidCredentials: Boom.unauthorized('Invalid Credentials'),
    userNotFound: Boom.notFound('User Not found'),
    emailPwdWrong: Boom.notFound('Email OR password are wrong'),
    invalidResetPasswordToken: Boom.conflict('Password reset token is invalid'),
    OtpExpired: Boom.badRequest('Sorry, your otp has been expired'),
    cannotReset: Boom.conflict('Sorry your password cannot be reset now, try later'),
    unableTosendSms: Boom.conflict('Unable To Send Sms please retry'),
    invalidOldPassword: Boom.badRequest('Invalid Old Password'),
    invalidNewPassword: Boom.badRequest('New Password can\'t be same as old password'),
    wrongPhoneno: Boom.conflict('Phone Number provided was wrong'),
    contactAlreadyVerified: Boom.conflict('This contact is already verified'),
    sessionCreated: Boom.expectationFailed('Session not created'),
    sessionExpired: Boom.unauthorized('Session Expired, Please login again'),
    accountDeactivated: Boom.unauthorized('Your account has been deactivated, Please contact admin'),
    accountBlocked: Boom.unauthorized('This account is blocked, please contact admin'),
    emailNotVerified: Boom.unauthorized('Your email is not activated yet, Please verify your email id first'),
    mobileNotVerified: Boom.unauthorized('your mobile is not verified yet, Please verify your mobile first'),
  },
  expirationCall: {
    forgotPasswordOTP: 'forgotPasswordOTP',
    mobileVerificationOTP: 'mobileVerificationOTP',
    emailVerificationToken: 'emailVerificationToken',
  },
  dataBase: {
    table: {
      user: 'SignUp'
    },
    dataBaseConstant: {
      social: {
        facebook: 'facebook',
        google: 'google',
      },
    
      expireTime: {
        forgotPasswordOTP: 300000, // milliseconds
        mobileVerificationOTP: 300000, // milliseconds
        emailVerificationToken: 300000, // milliseconds
      },
      deviceMultiSession: false,
      webMultiSession: true,
      sessionExpireInDays: 30,
    },
  },
  eventType: {
    registerBroadcast: 'registerBroadcast',
    userSignup: 'userSignup',
    userLogout: 'userLogout',
    forgotPassword: 'forgotPassword',
    resendVerificationOTP: 'resendVerificationOTP',
    resendVerificationLink: 'resendVerificationLink',
    aclUpdate: 'aclUpdate',
  },
 
  tcpEventType: {
    createAuthToken: 'createAuthToken',
    getUserList: 'getUserList',
    getNotificationList: 'getNotificationList',
    getSessionDetails: 'getSessionDetails',
    verifySession: 'verifySession',
  },
};

export const register = (email, password, name) => {
  return new Promise((resolve) => {
    // Simulate a slight network delay
    setTimeout(() => {
      resolve({
        data: {
          _id: "1234567890",
          email,
          name,
        },
      });
    }, 500);
  });
};

export const authorize = (email, password) => {
  return new Promise((resolve) => {
    // Return a fake token for any email/password
    setTimeout(() => {
      resolve({
        token: "fake-jwt-token",
        email,
        authenticated: Boolean(password),
      });
    }, 500);
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    resolve({
      data: {
        _id: "1234567890",
        email: "test@example.com",
        name: "Test User",
        token,
      },
    });
  });
};

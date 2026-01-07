export const authorize = (email, password) => {
  return Promise.resolve({ token: "fake-jwt-token" });
};

export const checkToken = (token) => {
  return Promise.resolve({
    data: {
      name: "Elise",
      email: "elise@example.com",
      _id: "fake-user-id",
    },
  });
};

export const signOut = () => {
  return Promise.resolve();
};

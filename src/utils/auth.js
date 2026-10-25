export const authorize = () => {
  return Promise.resolve({ token: "fake-jwt-token" });
};

export const checkToken = () => {
  return Promise.resolve({
    data: {
      name: "Elise",
      email: "elise@example.com",
      _id: "fake-user-id"
    }
  });
};

export const signOut = () => {
  return Promise.resolve();
};

export async function login(prevState, queryData) {
  const email = queryData.get("Email");
  const password = queryData.get("Password");
  if (email === "john.doe@test.com" && password === "password") {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    // TODO: Implement the real login function to use GraphQL
    return {
      success: true,
      message: "",
    };
  } else {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return {
      success: false,
      message: "Unable to authenticate user",
      attempts: prevState.attempts + 1,
    };
  }
}

export async function signup(prevState, queryData) {
  const email = queryData.get("Email");
  const password = queryData.get("Password");
  if (email === "jane.doe@test.com" && password === "Cupcake123") {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    // TODO: Implement the real signup function to use GraphQL
    return {
      success: true,
      message: "",
    };
  } else {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return {
      success: false,
      message: "Unable to create user",
    };
  }
}

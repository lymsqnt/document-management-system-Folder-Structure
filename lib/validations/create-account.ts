
export type CreateAccountData = {
  fullName: string;
  username: string;
  email: string;
  role: string;
  department: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
};

export type CreateAccountErrors = Partial<
  Record<keyof CreateAccountData, string>
>;

export function validateCreateAccount(
  data: CreateAccountData
): CreateAccountErrors {
  const errors: CreateAccountErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.username.trim()) {
    errors.username = "Username is required.";
  } else if (data.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.role) {
    errors.role = "Please select a role.";
  }

  if (!data.department) {
    errors.department = "Please select a department.";
  }

  if (!data.password) {
    errors.password = "Password is required.";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!data.acceptedTerms) {
    errors.acceptedTerms =
      "Please agree to the Terms and Conditions and Data Privacy Policy.";
  }

  return errors;
}
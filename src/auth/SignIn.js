import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";



export default function SignIn({
  onSubmit = async (data) => alert(JSON.stringify(data)),
}) {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    validationSchema: Yup.object({
      email: Yup.string().email("Enter a valid email").required("Required"),
      password: Yup.string()
        .min(6, "Password should be longer than 6 characters")
        .required("Required"),
    }),
  });

  return (
    <div className="main" maxWidth="xs">
      <div className="paper">
       
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            error={!!errors?.email}
            helperText={errors?.email && errors?.email?.message}
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <input
            error={!!errors?.password}
            helperText={errors?.password && errors?.password.message}
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <input
            label="Remember me"
            type="checkbox"
          />
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            data-testid="button"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register({user, setUser}) {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const userSubmit = (formData) =>{

        if(password !== confirmPassword){
            setError("Passwords are not the same!")
            return;
        }

        fetch('http://localhost:3030/users/register',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        }).then(async response => {
            if (!response.ok) {
                const error = await response.json();
                setError(error.message)
                throw new Error(err.message);
            }
            return response.json();
        }).then(async data => {
            console.log(data)
            setUser(data.accessToken)
            navigate('/')
        })
        .catch(err => {
            setError(err.message);
        });
    }

    return(
      <>
      {user ? (
        <div className="flex justify-center items-center min-h-[100px] mt-8">
          <h1 className="text-black-600 font-semibold text-3xl tracking-wide select-none">
            You are already logged in!
          </h1>
        </div>
      ):(
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>
        {error && (
            <div className="mb-4 mt-10 p-3 bg-red-100 text-red-700 rounded border border-red-300">
                {error}
            </div>
        )}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={userSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  value={email}
                  required
                  autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  value={password}
                  required
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordConfirm"
                  type="password"
                  value={confirmPassword}
                  required
                  autoComplete="current-passwordConfirm"
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder:text-gray-400 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
    </div>
      )}
    </>
    );
}
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Portfolio() {
  return (
    <div>
      <main className="">
        <section>
          <div className="relative flex items-top justify-center">
            <div className="max-w-6xl mx-auto ">
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 mr-2  sm:rounded-lg">
                    <h1 className="text-4xl sm:text-5xl">Get in touch</h1>
                    <p className="text-lg md:text-2xl mt-2">
                      Fill in the form to start a conversation
                    </p>
                  </div>

                  <form className="p-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                      <label for="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-100 mt-2 py-3 px-3 rounded-lg border-2 border-black text-gray-800 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label for="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black text-gray-800 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label for="tel" className="hidden">
                        Number
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Telephone Number"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black text-gray-800 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="mt-2 flex justify-center pt-2">
                      <button className="btn btn-block rounded-3xl">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

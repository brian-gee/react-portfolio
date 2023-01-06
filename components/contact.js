import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Portfolio() {
	return (
		<div>
			<main className="px-10">
				<section>
					<div class="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
						<div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
							<div class="overflow-hidden">
								<div class="grid grid-cols-1 md:grid-cols-2">
									<div class="p-6 mr-2  sm:rounded-lg">
										<h1 class="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
											Get in touch
										</h1>
										<p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2">
											Fill in the form to start a conversation
										</p>

										<div class="flex items-center mt-8 text-gray-600">
											<EmailOutlinedIcon></EmailOutlinedIcon>
											<div class="ml-4 text-md tracking-wide font-semibold w-40">
												info@acme.org
											</div>
										</div>
									</div>

									<form class="p-6 flex flex-col justify-center">
										<div class="flex flex-col">
											<label for="name" class="hidden">
												Full Name
											</label>
											<input
												type="name"
												name="name"
												id="name"
												placeholder="Full Name"
												class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<div class="flex flex-col mt-2">
											<label for="email" class="hidden">
												Email
											</label>
											<input
												type="email"
												name="email"
												id="email"
												placeholder="Email"
												class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<div class="flex flex-col mt-2">
											<label for="tel" class="hidden">
												Number
											</label>
											<input
												type="tel"
												name="tel"
												id="tel"
												placeholder="Telephone Number"
												class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<button
											type="submit"
											class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
										>
											Submit
										</button>
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

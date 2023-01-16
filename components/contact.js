import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Portfolio() {
	return (
		<div>
			<main className="px-10">
				<section>
					<div className="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
						<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
							<div className="overflow-hidden">
								<div className="grid grid-cols-1 md:grid-cols-2">
									<div className="p-6 mr-2  sm:rounded-lg">
										<h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
											Get in touch
										</h1>
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
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black text-gray-800 focus:border-indigo-500 focus:outline-none"
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
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black text-gray-800 focus:border-indigo-500 focus:outline-none"
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
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black text-gray-800 focus:border-indigo-500 focus:outline-none"
											/>
										</div>
										<div className='mt-2 flex justify-start'>
											<Button
												variant="contained"
												style={{ backgroundColor: '#3b82f6', color: '#FFFFFF' }}
												endIcon={<SendIcon />}
											>
												Submit
											</Button>
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

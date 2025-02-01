import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
	return (
		<div className='flex flex-col items-center min-h-screen font-sans bg-gray-100'>
			{/* Header Section */}
			<section className='flex flex-col items-center justify-center h-screen p-6 sm:p-12 relative text-center bg-gradient-to-b from-white to-gray-200 shadow-lg w-full'>
				<header className='text-5xl font-extrabold text-gray-900 my-6 drop-shadow-lg'>
					Discover the Future with{" "}
					<span className='text-blue-500'>Amazing Product</span>
				</header>

				{/* Product Image */}
				<div className='relative w-96 h-96 flex items-center justify-center bg-white rounded-full shadow-2xl border-4 border-gray-100'>
					<Image
						src='/product.webp'
						alt='Amazing Product'
						width={300}
						height={300}
						className='rounded-full drop-shadow-lg'
					/>
				</div>

				{/* Product Description */}
				<p className='text-gray-700 max-w-lg my-6 text-lg leading-relaxed'>
					Experience cutting-edge technology with{" "}
					<strong>Amazing Product</strong>. Built for performance, designed for
					elegance, and crafted for the future.
				</p>

				{/* Scroll Down Indicator */}
				<div className='absolute bottom-10 animate-bounce text-gray-600 text-3xl'>
					<FaArrowDown />
				</div>
			</section>

			{/* Features Section */}
			<section className='flex flex-wrap justify-center items-center min-h-screen gap-8 p-6 sm:p-12 bg-white w-full'>
				<div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg w-72 h-72 text-center flex flex-col justify-center items-center transform transition hover:scale-105'>
					<h3 className='text-2xl font-semibold'>Lightning Speed</h3>
					<p className='mt-2 text-sm'>
						Experience blazing-fast performance with cutting-edge technology
						designed to keep you ahead.
					</p>
					<div className='mt-4 text-5xl'>⚡</div>
				</div>
				<div className='bg-gradient-to-r from-green-400 to-blue-400 text-white p-8 rounded-lg shadow-lg w-72 h-72 text-center flex flex-col justify-center items-center transform transition hover:scale-105'>
					<h3 className='text-2xl font-semibold'>Sleek & Modern</h3>
					<p className='mt-2 text-sm'>
						A stylish, minimalist design that fits perfectly in any environment
						while offering maximum functionality.
					</p>
					<div className='mt-4 text-5xl'>✨</div>
				</div>
				<div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg shadow-lg w-72 h-72 text-center flex flex-col justify-center items-center transform transition hover:scale-105'>
					<h3 className='text-2xl font-semibold'>Unmatched Battery Life</h3>
					<p className='mt-2 text-sm'>
						Go longer without worrying about charging. A battery built to last
						for days on a single charge.
					</p>
					<div className='mt-4 text-5xl'>🔋</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='text-center text-gray-600 py-6 w-full bg-gray-200'>
				Contact us at:{" "}
				<a
					href='mailto:info@amazingproduct.com'
					className='text-blue-600 underline'>
					info@amazingproduct.com
				</a>
			</footer>
		</div>
	);
}

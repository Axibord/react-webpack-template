import React from 'react'
import ReactDOM from 'react-dom'
import './output.css'

class App extends React.Component {
	render() {
		return (
			<div className='flex flex-col justify-center items-center min-h-screen bg-gray-900'>
				<h1 className='text-6xl text-green-400 border-b-4 pb-4'>Webpack compiled React successfully</h1>
				<h2 className='text-2xl text-white mt-10 '>
					Read 'npm run build' description in github to see how to optimize for production
				</h2>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react';
import './StudentTimeTable.scss';

const StudentTimeTable = () => {
	return (
		<div className='container'>
			<div className='row header'>
				<h1 className='display-4 text-center'>STUDENT TIME TABLE</h1>
			</div>
			<div className='row content'>
				<div class='timetable'>
					<div class='week-names'>
						<div>monday</div>
						<div>tuesday</div>
						<div>wednesday</div>
						<div>thursday</div>
						<div>friday</div>
						<div class='weekend'>saturday</div>
						<div class='weekend'>sunday</div>
					</div>
					<div class='time-interval'>
						<div>8:30 - 9:30</div>
						<div>9:30 - 10:30</div>
						<div>10:30 - 11:30</div>
						<div>11:30 - 12:30</div>
						<div>12:30 - 13:30</div>
						<div>13:30 - 14:30</div>
						<div>14:30 - 15:30</div>
						<div>15:30 - 16:30</div>
					</div>
					<div class='content'>
						<div>
							<div class='accent-orange-gradient'>EE7211</div>
						</div>
						<div>EE7207</div>
						<div>EE7212</div>
						<div>EE7208</div>
						<div>
							<div class='accent-green-gradient'>EE7203</div>
						</div>
						<div class='weekend'></div>
						<div class='weekend'></div>
						<div>EE7201</div>
						<div></div>
						<div>EE7207</div>
						<div>
							<div class='accent-cyan-gradient'>EE7209</div>
						</div>
						<div>EE7203</div>
						<div class='weekend'></div>
						<div class='weekend'></div>
						<div>
							<div class='accent-pink-gradient'>EE7209</div>
						</div>
						<div>EE7802</div>
						<div>
							<div class='accent-purple-gradient'>EE7201</div>
						</div>
						<div>EE7217</div>
						<div></div>
						<div class='weekend'>EE7205</div>
						<div class='weekend'></div>
						<div>EE7209</div>
						<div>EE7202</div>
						<div>EE7217</div>
						<div>EE7214</div>
						<div></div>
						<div class='weekend'></div>
						<div class='weekend'></div>
						<div>
							<div class='accent-purple-gradient'>Laboratory works</div>
						</div>
						<div>EE7213</div>
						<div>EE7204</div>
						<div>EE7215</div>
						<div>Laboratory works</div>
						<div class='weekend'></div>
						<div class='weekend'></div>
						<div>Laboratory works</div>
						<div>EE7213</div>
						<div>Common hours</div>
						<div>EE7215</div>
						<div>Laboratory works</div>
						<div class='weekend'></div>
						<div class='weekend'></div>
						<div>
							<div class='accent-purple-gradient'>Laboratory works</div>
						</div>
						<div>EE7212</div>
						<div>common hours</div>
						<div></div>
						<div>Laboratory works</div>
						<div class='weekend'></div>
						<div class='weekend'></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div class='weekend'></div>
						<div class='weekend'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentTimeTable;

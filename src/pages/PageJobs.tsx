import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../appContext';
import { DisplayJob } from '../components/DisplayJob';
import { EditJob } from '../components/EditJob';
import { IJob } from '../interfaces';
import '../styles/pageJobs.scss';

export const PageJobs = () => {
	const { jobs, anyJobIsBeingEdited } = useContext(AppContext);

	return (
		<div className="page pageJobs">
			<div className="jobs">
				<div className="jobsHeader">
					<h2>There are {jobs.length} jobs:</h2>
					{!anyJobIsBeingEdited() && <button>Add</button>}
				</div>
				{jobs.map((job: IJob) => {
					return (
						<React.Fragment key={job.id}>
							{job.userIsEditing ? (
								<EditJob job={job} />
							) : (
								<DisplayJob job={job} />
							)}
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

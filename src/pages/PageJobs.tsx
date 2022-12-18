import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../appContext';
import { DisplayJob } from '../components/DisplayJob';
import { JobForm } from '../components/JobForm';
import { IJob, FormAction, addingJob } from '../interfaces';
import '../styles/pageJobs.scss';

export const PageJobs = () => {
	const { jobs, anyJobIsBeingEdited, isAdding, toggleAddingForm } = useContext(AppContext);

	return (
		<div className="page pageJobs">
			<div className="jobs">
				<div className="jobsHeader">
					<h2>There are {jobs.length} jobs:</h2>
					{!anyJobIsBeingEdited() && !isAdding && <button onClick={toggleAddingForm}>Add</button>}
				</div>
				{isAdding && (
					<JobForm job={addingJob} formAction={FormAction.Add} />
				)}
				{jobs.map((job: IJob) => {
					return (
						<React.Fragment key={job.id}>
							{job.userIsEditing ? (
								<JobForm
									job={job}
									formAction={FormAction.Edit}
								/>
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

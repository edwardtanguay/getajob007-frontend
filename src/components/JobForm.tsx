import { useContext } from 'react';
import { AppContext } from '../appContext';
import { IJob, FormAction } from '../interfaces';
import { JobFormRowLine } from './JobFormRowLine';
import { JobFormRowParagraph } from './JobFormRowParagraph';

interface IProps {
	job: IJob;
	formAction: FormAction;
}

export const JobForm = ({ job, formAction }: IProps) => {
	const {
		handleToggleEditStatus,
		handleSaveEditedJob,
		handleToggleAddStatus,
		handleSaveAddedJob,
	} = useContext(AppContext);

	return (
		<form className={formAction.toString()}>
			<fieldset>
				<legend>Editing Job</legend>

				<JobFormRowLine label="Title" fieldIdCode="title" value={job.editItem.title} job={job} />
				<JobFormRowLine label="Company" fieldIdCode="company" value={job.editItem.company} job={job} />
				<JobFormRowLine label="URL" fieldIdCode="url" value={job.editItem.url} job={job} />
				<JobFormRowParagraph label="Description" fieldIdCode="description" value={job.editItem.description} job={job} />
				<JobFormRowLine label="Skill List" fieldIdCode="skillList" value={job.editItem.skillList} job={job} />
				<JobFormRowLine label="Next Todo" fieldIdCode="todo" value={job.editItem.todo} job={job} />

				<div className="buttonRow">
					{formAction === FormAction.Edit ? (
						<>
							<button
								type="button"
								onClick={() => handleToggleEditStatus(job)}
							>
								Clear
							</button>
							<button
								type="button"
								onClick={() => handleSaveEditedJob(job)}
							>
								Save
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								onClick={() => handleToggleAddStatus(job)}
							>
								Clear
							</button>
							<button
								type="button"
								onClick={() => handleSaveAddedJob(job)}
							>
								Save
							</button>
						</>
					)}
				</div>
			</fieldset>
		</form>
	);
};

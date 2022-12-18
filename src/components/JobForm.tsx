import { useContext } from 'react';
import { AppContext } from '../appContext';
import { IJob, FormAction } from '../interfaces';

interface IProps {
	job: IJob;
	formAction: FormAction;
}

export const JobForm = ({ job, formAction }: IProps) => {
	const {
		jobs,
		handleChangeFormField,
		handleToggleEditStatus,
		handleSaveEditedJob,
		handleToggleAddStatus,
		handleSaveAddedJob,
	} = useContext(AppContext);

	return (
		<form>
			<fieldset>
				<legend>Editing Job</legend>

				<div className="row">
					<label>Title</label>
					<div>
						<input
							value={job.editItem.title}
							type="text"
							onChange={(e) =>
								handleChangeFormField(
									e.target.value,
									job,
									'title'
								)
							}
						/>
					</div>
				</div>

				<div className="row">
					<label>Company</label>
					<div>
						<input
							value={job.editItem.company}
							type="text"
							onChange={(e) =>
								handleChangeFormField(
									e.target.value,
									job,
									'company'
								)
							}
						/>
					</div>
				</div>

				<div className="row">
					<label>URL</label>
					<div>
						<input
							value={job.editItem.url}
							type="text"
							onChange={(e) =>
								handleChangeFormField(
									e.target.value,
									job,
									'url'
								)
							}
						/>
					</div>
				</div>

				<div className="row">
					<label>Description</label>
					<div>
						<textarea
							value={job.editItem.description}
							onChange={(e) =>
								handleChangeFormField(
									e.target.value,
									job,
									'description'
								)
							}
						/>
					</div>
				</div>

				<div className="row">
					<label>Skill List</label>
					<div>
						<input
							value={job.editItem.skillList}
							type="text"
							onChange={(e) =>
								handleChangeFormField(
									e.target.value,
									job,
									'skillList'
								)
							}
						/>
					</div>
				</div>

				<div className="row">
					<label>Next Todo</label>
					<div>
						<input
							value={job.editItem.todo}
							type="text"
							onChange={(e) =>
								handleChangeFormField(
									e.target.value,
									job,
									'todo'
								)
							}
						/>
					</div>
				</div>
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

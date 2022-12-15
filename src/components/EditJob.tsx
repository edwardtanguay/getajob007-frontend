import { IJob } from '../interfaces';

interface IProps {
	job: IJob
}

export const EditJob = ({ job }: IProps) => {
	return (
		<>
			<p>editing job: {job.title}</p>
		</>
	);
};
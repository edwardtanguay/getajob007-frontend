import { useContext, useEffect } from 'react';
import { AppContext } from '../appContext';
import '../styles/pageLogin.scss';

export const PageLogin = () => {
	const { pin, handleChangePin, prePageLoad } = useContext(AppContext);

	useEffect(() => {
		prePageLoad();
	},[]);

	return (
		<div className="page pageLogin">
			<form>
				<fieldset>
					<legend>Identify as Admin</legend>

					<div className="row">
						<label>Pin</label>
						<div>
							<input
								value={pin}
								autoFocus
								type="password"
								onChange={(e) =>
									handleChangePin(e.target.value)
								}
							/>
						</div>
						<button type="button">Identify</button>
					</div>
					<div className="message">
						Once you identify as admin with your PIN, you will see edit/add/delete
						buttons next to which you will have to enter your PIN
						each time you use them.
					</div>
				</fieldset>
			</form>
		</div>
	);
};

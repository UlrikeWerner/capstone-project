import {useState} from 'react';

import {useStore} from '../../hooks/useStore';
import {
	getDateForForm,
	createDurationInputValue,
	secondToDurationData,
	calculateDistance,
	calculateDuration,
} from '../../utils/date';
import Button from '../Button/index';

import {StyledButtonWrapper} from './Styled/StyledButtonWrapper';
import {StyledFormContainer} from './Styled/StyledFormContainer';
import {StyledInput} from './Styled/StyledInput';
import {StyledInputWrapper} from './Styled/StyledInputWrapper';

export default function AddActivity({
	challengeId,
	id = '',
	date = '',
	distance = '',
	duration = '',
}) {
	const addActivity = useStore(state => state.addActivity);
	const setModalStatus = useStore(state => state.setModalStatus);
	const setModal = useStore(state => state.setModal);

	const today = getDateForForm(new Date());
	date = date ? date : today;
	distance = distance ? distance / 1000 : '';
	duration = duration ? createDurationInputValue(secondToDurationData(duration)) : '';
	const [inputValues, setInputValues] = useState({
		date: date,
		distance: distance,
		duration: duration,
	});

	return (
		<StyledFormContainer
			onSubmit={event => {
				event.preventDefault();
				addActivity(
					id,
					challengeId,
					inputValues.date,
					calculateDistance(inputValues.distance),
					calculateDuration(inputValues.duration)
				);
				setInputValues({date: today, distance: '', duration: ''});
				setModal('', '', '');
				setModalStatus(false);
			}}
		>
			<StyledInputWrapper>
				<label htmlFor="activityDate" aria-label="Enter your date">
					date of the activity
				</label>
				<StyledInput
					type="date"
					id="activityDate"
					placeholder="YYYY-MM-DD"
					max={today}
					value={inputValues.date}
					required
					onChange={event => {
						setInputValues({
							...inputValues,
							date: event.target.value,
						});
					}}
				/>
			</StyledInputWrapper>
			<StyledInputWrapper>
				<label htmlFor="activityDistance" aria-label="Enter your distance">
					distance (km)
				</label>
				<StyledInput
					type="number"
					id="activityDistance"
					step="0.001"
					placeholder="0.000"
					value={inputValues.distance}
					required
					onChange={event => {
						setInputValues({
							...inputValues,
							distance: event.target.value,
						});
					}}
				/>
			</StyledInputWrapper>
			<StyledInputWrapper>
				<label htmlFor="activityDuration" aria-label="Enter your duration">
					duration
				</label>
				<StyledInput
					type="text"
					id="activityDuration"
					pattern="^(([0-9]+:)?[0-5]?[0-9]:)?[0-5]?[0-9]$"
					placeholder="hh:mm:ss"
					value={inputValues.duration}
					required
					onChange={event => {
						setInputValues({
							...inputValues,
							duration: event.target.value,
						});
					}}
				/>
			</StyledInputWrapper>
			<StyledButtonWrapper>
				<Button
					variant="cancel"
					onClick={() => {
						setModal('', '', '');
						setModalStatus(false);
					}}
				>
					cancel
				</Button>
				<Button
					variant="medium"
					type="submit"
					id="submit"
					disabled={
						inputValues.distance === '' ||
						inputValues.distance === null ||
						inputValues.distance <= 0 ||
						inputValues.duration === '' ||
						inputValues.duration === null
					}
				>
					{id ? 'edit' : 'save'}
				</Button>
			</StyledButtonWrapper>
		</StyledFormContainer>
	);
}

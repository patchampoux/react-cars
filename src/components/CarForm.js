import {useId} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeName, changeCost, addCar} from "../store"

function CarForm() {
	const dispatch = useDispatch();
	const nameId = useId();
	const costId = useId();

	const {name, cost} = useSelector((state) => {
		return {
			name: state.form.name,
			cost: state.form.cost
		};
	});

	const handleNameChange = (e) => {
		dispatch(changeName(e.target.value));
	};

	const handleCostChange = (e) => {
		const carCost = parseInt(e.target.value) || 0;

		dispatch(changeCost(carCost));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		dispatch(addCar({
			name,
			cost
		}));
	};

	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">Add Car</h4>
			<form action="#" onSubmit={handleFormSubmit}>
				<div className="field-group">
					<div className="field">
						<label htmlFor={nameId} className="label">Name</label>
						<input type="text" id={nameId} name="name-fld" value={name} onChange={handleNameChange} className="input is-expanded" />
					</div>
					<div className="field">
						<label htmlFor={costId} className="label">Cost</label>
						<input type="number" id={costId} name="cost-fld" value={cost || ''} onChange={handleCostChange} className="input is-expanded" />
					</div>
				</div>
				<div className="field">
					<button type="submit" className="button is-link">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default CarForm;

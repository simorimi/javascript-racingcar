import CarList from '../src/Model/CarList.js';

describe('자동차 도메인 테스트', () => {
	test('자동차 이름이 5자 이상이면 에러를 낸다', () => {
		// Arrange
		const input = '12345';
		const carList = new CarList();

		// Act & Assert
		expect(() => carList.validateNameLength(input)).toThrow('[ERROR]');
	});

	test('자동차 이름 빈값이면 에러를 낸다', () => {
		// Arrange
		const input = '';
		const carList = new CarList();

		// Act & Assert
		expect(() => carList.validateEmpty(input)).toThrow('[ERROR]');
	});

	test('자동차 개수가 1개 미만이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모'];
		const carList = new CarList();

		// Act & Assert
		expect(() => carList.validateCarNumber(input)).toThrow('[ERROR]');
	});

	test('자동차 중복이면 에러를 낸다.', () => {
		//Arrange
		const input = ['시모', '리안', '시모', '제이드', '에프이'];
		const carList = new CarList();

		//Act & Assert
		expect(() => carList.validateDuplicate(input)).toThrow('[ERROR]');
	});
});

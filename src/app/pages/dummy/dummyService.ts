class DummyService {
    getSummary(firstNumber: number, secondNumber: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => resolve(firstNumber + secondNumber),
                1000,
            );
        });
    }
}

export {
    DummyService as default,
};

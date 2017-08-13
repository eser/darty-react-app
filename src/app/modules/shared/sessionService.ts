class SessionService {
    state: { logged: boolean, token: string | null, details: any };

    constructor() {
        this.state = {
            logged: false,
            token: null,
            details: null
        };
    }

    async init() {
        let sessionToken;

        sessionToken = localStorage.getItem('sessionToken');

        if (sessionToken === null) {
            sessionToken = sessionStorage.getItem('sessionToken');
        }

        if (sessionToken !== null) {
            await this.validateToken(sessionToken);
        }
    }

    setSessionToken(sessionToken, rememberSession) {
        if (rememberSession) {
            localStorage.setItem('sessionToken', sessionToken);
        }

        sessionStorage.setItem('sessionToken', sessionToken);
    }

    unsetSessionToken() {
        sessionStorage.removeItem('sessionToken');
        localStorage.removeItem('sessionToken');
    }

    setSessionInfo(sessionToken, data) {
        this.state.logged = true;
        this.state.token = sessionToken;
        this.state.details = data;
    }

    unsetSessionInfo() {
        this.state.logged = false;
        this.state.token = null;
        this.state.details = null;
    }

    async validateToken(sessionToken) {
        // TODO further implementation is needed.
        await Promise.resolve()
            .then(() => {
                this.setSessionInfo(
                    sessionToken,
                    {
                        name: 'Kullanıcı-2',
                    }
                );
            });
    }

    async login(email, password, rememberSession) {
        // TODO further implementation is needed.
        const sessionToken = 'test';

        await Promise.resolve()
            .then(() => {
                this.setSessionToken(sessionToken, rememberSession);
                this.setSessionInfo(
                    sessionToken,
                    {
                        name: 'Kullanıcı-2',
                    }
                );
            });
    }

    async logout() {
        // TODO further implementation is needed.
        await Promise.resolve()
            .then(() => {
                this.unsetSessionToken();
                this.unsetSessionInfo();
            });
    }
}

export {
    SessionService,
};

export default SessionService;

class logoutPage {
    get btnBarra() { return $('#react-burger-menu-btn'); }
    get btnLogout() { return $('#logout_sidebar_link'); }

    async abrirBarra() {
        await this.btnBarra.waitForClickable();
        await this.btnBarra.click();
    }

    async logout() {
        await this.btnLogout.waitForClickable();
        await this.btnLogout.click();
    }
}

export default new logoutPage();
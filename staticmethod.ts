class College {
    static collegeName: string = "Global Tech Institute";

    static getCollegeInfo(): void {
        console.log(`Welcome to ${College.collegeName}`);
    }
}

College.getCollegeInfo();
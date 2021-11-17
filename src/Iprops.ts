export default interface Iprops  {
    request: {
            id: number;
            title: string;
            client: string;
            due: string;
            count: number;
            amount: number;
            method: Array<String>;
            material:Array<String>;
            status: string;
    }
}

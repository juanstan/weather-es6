// declare json type to be able to do imports
declare module "*.json"
{
    const value: any;
    export default value;
}
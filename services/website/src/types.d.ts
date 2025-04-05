declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

type MenuToggleAction = (foo?: any) => void;

import Menu from "./menu/menu";

interface IProps {

}

const Header: React.FC<IProps> = (props: IProps): React.ReactElement => {


    return (
        <>
            <Menu />
        </>
    );
};

export default Header;

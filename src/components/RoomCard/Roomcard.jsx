import { Card } from "antd";
const { Meta } = Card;

const Roomcard = () => {
  return (
    <div>
      <Card
        hoverable style={{ width: 300, }}
        cover={<img alt="example"src="https://i.pinimg.com/736x/94/b4/96/94b4961cdf6aa3207113944c5dc1aa7a.jpg"/>
        }>
            
        <Meta title="suite 1" description="Habitacion para relax" />
      </Card>
    </div>
  );
};

export default Roomcard;

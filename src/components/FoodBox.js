import { Card, Col, Divider, Button } from "antd";


function FoodBox(props) {

    return (
      <Col>
        <Card
          title={props.foodsList.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.foodsList.image} height={60} />
          <p>Calories: {props.foodsList.calories}</p>
          <p>Servings: {props.foodsList.servings}</p>
          <p>
            <b>Total Calories: {props.foodsList.calories * props.foodsList.servings} </b> kcal
          </p>
          <Button onClick={() => props.clickToDelete(props.foodsList.name)} className="btn-delete" type="primary"> Delete </Button>
        </Card>
      </Col>
    )

}

export default FoodBox;
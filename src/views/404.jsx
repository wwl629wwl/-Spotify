import React from "react";
import SpotifyItem from "../components/SpotifyItem";
import SiderItem from "../components/SiderItem";
import AvatarCard from "../components/AvatarCard";
import { Col, Row } from "antd";

const NotFound = function NotFound() {


    return <div className="not-found">
        <Row >
            {[1, 2, 3, 4, 5].map(item => {
                return <Col key={item}
                    xs={{
                        flex: '100%',
                    }}
                    sm={{
                        flex: '30%',
                    }}
                    md={{
                        flex: '30%',
                    }}
                    lg={{
                        flex: '20%',
                    }}
                    xl={{
                        flex: '19%',
                    }}
                >
                    <AvatarCard />
                </Col>

            })}
        </Row>
    </div>
}

export default NotFound;
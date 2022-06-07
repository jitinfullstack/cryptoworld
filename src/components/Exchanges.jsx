import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
 // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  console.log(data);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      {/* <Row> */}
        {/* {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
      {/* </Row> */}
      <Row>
          <Col span={24}>
              <br />
              <Text><strong>Api is unable to call, therefore static data is visible...</strong></Text>
              <br />
          </Col>
      </Row>
      <Row>
          <Col span={24}>
            <Collapse>
              <Panel                
                showArrow={false}
                header={(
                  <Row >
                    <Col span={6}>
                        <Text><strong>10k</strong></Text>  
                    </Col>                    
                    <Col span={6}>${millify(1000000)}</Col>
                    <Col span={6}>{millify(10000)}</Col>
                    <Col span={6}>{millify(100020000)}%</Col>
                    <Col span={12}><Avatar className="exchange-image" src='https://cdn-images-1.medium.com/max/1200/1*4c7_SNuureECLAy7nW8TKQ.png' />
                      <Text><strong>Coinbase</strong></Text>  
                    </Col>                    
                  </Row>

                  )}
              >     <Text>Its largely institutional, and to a degree retail investors, recognizing that the pain is already endured, and we are closer to the bottom than we are to the top," Ben McMillan, chief investment officer of Arizona-based IDX Digital Assets, told Reuters. The latest influx of cash comes as bitcoin, the largest cryptocurrency by market capitalization, is down 38% from the start of 2022. Bitcoin has struggled to find support above $30,000, which is more than half of its all-time high of $69,000 reached in November 2021. Bitcoin was trading lower Tuesday, down nearly 6%. Cryptos have reacted negatively to tightening from the Federal Reserve and Russias invasion of Ukraine, mostly in line with traditional markets experiencing turbulence.</Text>           
              </Panel>
            </Collapse>
          </Col>
      </Row>
      <Row>
          <Col span={24}>
            <Collapse>
              <Panel                
                showArrow={false}
                header={(
                  <Row >
                    <Col span={6}>
                        <Text><strong>10k</strong></Text>  
                    </Col>                    
                    <Col span={6}>${millify(1000000)}</Col>
                    <Col span={6}>{millify(10000)}</Col>
                    <Col span={6}>{millify(100020000)}%</Col>
                    <Col span={12}><Avatar className="exchange-image" src='https://www.binance.sg/static/images/shutdown/logo.svg' />
                      <Text><strong>Binance</strong></Text>  
                    </Col>                    
                  </Row>

                  )}
              >     <Text>Its largely institutional, and to a degree retail investors, recognizing that the pain is already endured, and we are closer to the bottom than we are to the top," Ben McMillan, chief investment officer of Arizona-based IDX Digital Assets, told Reuters. The latest influx of cash comes as bitcoin, the largest cryptocurrency by market capitalization, is down 38% from the start of 2022. Bitcoin has struggled to find support above $30,000, which is more than half of its all-time high of $69,000 reached in November 2021. Bitcoin was trading lower Tuesday, down nearly 6%. Cryptos have reacted negatively to tightening from the Federal Reserve and Russias invasion of Ukraine, mostly in line with traditional markets experiencing turbulence.</Text>           
              </Panel>
            </Collapse>
          </Col>
      </Row>
      <Row>
          <Col span={24}>
            <Collapse>
              <Panel                
                showArrow={false}
                header={(
                  <Row >
                    <Col span={6}>
                        <Text><strong>10k</strong></Text>  
                    </Col>                    
                    <Col span={6}>${millify(1000000)}</Col>
                    <Col span={6}>{millify(10000)}</Col>
                    <Col span={6}>{millify(100020000)}%</Col>
                    <Col span={12}><Avatar className="exchange-image" src='https://coincheck.com/images/logos/logo.svg' />
                      <Text><strong>Coin Check</strong></Text>  
                    </Col>                    
                  </Row>

                  )}
              >   
              <Text>Its largely institutional, and to a degree retail investors, recognizing that the pain is already endured, and we are closer to the bottom than we are to the top," Ben McMillan, chief investment officer of Arizona-based IDX Digital Assets, told Reuters. The latest influx of cash comes as bitcoin, the largest cryptocurrency by market capitalization, is down 38% from the start of 2022. Bitcoin has struggled to find support above $30,000, which is more than half of its all-time high of $69,000 reached in November 2021. Bitcoin was trading lower Tuesday, down nearly 6%. Cryptos have reacted negatively to tightening from the Federal Reserve and Russias invasion of Ukraine, mostly in line with traditional markets experiencing turbulence.</Text>             
              </Panel>
            </Collapse>
          </Col>
      </Row>
    </>
  );
};

export default Exchanges;
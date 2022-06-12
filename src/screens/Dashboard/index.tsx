import { HighlightCard } from "../../components/HighlightCard"
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreating,
  UserName,
  Icon,
  HighlighCards,
} from "./styles"

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "http://github.com/ViniSpirit.png" }} />
            <User>
              <UserGreating>Ola,</UserGreating>
              <UserName>Vini</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlighCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlighCards>
    </Container>
  )
}

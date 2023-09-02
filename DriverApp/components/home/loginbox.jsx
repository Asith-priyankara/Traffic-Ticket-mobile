import {
  Input,
  InputField,
  Button,
  ButtonText,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import styles from "../styles";
import { View, Text } from "react-native";

const Loginbox = () => {
  return (
    <View style={styles.container2}>
      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here" />
      </Input>

      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Password" />
      </Input>

      <Button
        style={styles.button}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={styles.button}>Sign In </ButtonText>
      </Button>
      <View style={{ flexDirection: "row" }}>
        <Text size="lg">Don't have an account? </Text>
        <Link href="https://gluestack.io/" isExternal>
          <LinkText size="sm">Sign Up</LinkText>
        </Link>
      </View>
      <Link href="https://gluestack.io/" isExternal>
        <LinkText size="sm">Forgot Password</LinkText>
      </Link>
      <Link href="https://gluestack.io/" isExternal>
        <LinkText size="sm">Change Password</LinkText>
      </Link>
    </View>
  );
};

export default Loginbox;
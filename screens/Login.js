import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
/* Importamos os recursos de autenticação através das configurações firebase */
import { auth } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Você deve preencher todos os campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.navigate("AreaLogada");
      })
      .catch((error) => {
        let mensagem;
        switch (error.code) {
          case "auth/user-not-found":
            mensagem = "Usuário não encontrado!";
            break;
          case "auth/wrong-password":
            mensagem = "Senha incorreta";
            break;
          default:
            mensagem = "Houve um erro, tente novamente mais tarde";
            break;
        }
        Alert.alert("Ops!", mensagem);
      });
  };

  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Recuperar senha", "Verifique seu E-mail");
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          onChangeText={(valor) => setEmail(valor)}
          keyboardType="email-address"
          placeholder="E-mail"
          style={estilos.input}
        />
        <TextInput
          onChangeText={(valor) => setSenha(valor)}
          secureTextEntry
          placeholder="Senha"
          style={estilos.input}
        />
        <View style={estilos.botoes}>
          <Button title="Entre" color="green" onPress={login} />

          <Button
            title="Recuperar Senha"
            color="blue"
            onPress={recuperarSenha}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 32,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    marginVertical: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

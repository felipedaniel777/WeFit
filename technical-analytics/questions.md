# **Análise do componente breadcrumb**

# **Endpoint de Cadastro**

## **Descrição:**
Este endpoint permite o cadastro de vendedores ou compradores na aplicação, conforme o tipo de pessoa selecionado (física ou jurídica).

## **Método:**
`POST /api/cadastro`

## **Parâmetros de URL:**
Nenhum.

## **Corpo da Requisição (Request Body):**

O corpo da requisição deve conter os seguintes campos:

- **tipoPessoa** (obrigatório): Define o tipo de pessoa que está sendo cadastrada.
  - Valores possíveis: `"fisica"`, `"juridica"`
  
- **cnpj** (obrigatório se `tipoPessoa` for `"juridica"`): CNPJ da empresa.
  - Tipo: `string`
  
- **cpfResponsavel** (obrigatório se `tipoPessoa` for `"juridica"`): CPF do responsável pela empresa.
  - Tipo: `string`
  
- **cpf** (obrigatório se `tipoPessoa` for `"fisica"`): CPF da pessoa física.
  - Tipo: `string`
  
- **nome** (obrigatório): Nome completo da pessoa ou empresa.
  - Tipo: `string`
  
- **celular** (obrigatório): Número de celular para contato.
  - Tipo: `string`
  
- **telefone** (opcional): Número de telefone fixo.
  - Tipo: `string`
  
- **email** (obrigatório): Endereço de e-mail para contato.
  - Tipo: `string`
  
- **confirmarEmail** (obrigatório): Confirmação do endereço de e-mail.
  - Tipo: `string`
  
- **endereco** (obrigatório): Informações do endereço.
  - **cep** (obrigatório): Código postal.
    - Tipo: `string`
  - **logradouro** (obrigatório): Nome da rua/avenida.
    - Tipo: `string`
  - **numero** (obrigatório): Número do endereço.
    - Tipo: `string`
  - **complemento** (opcional): Complemento do endereço.
    - Tipo: `string`
  - **cidade** (obrigatório): Nome da cidade.
    - Tipo: `string`
  - **bairro** (obrigatório): Nome do bairro.
    - Tipo: `string`
  - **estado** (obrigatório): Sigla do estado (ex: SP, RJ).
    - Tipo: `string`
  
- **termosDeUso** (obrigatório): Confirmação de aceitação dos termos de uso.
  - Tipo: `boolean`

## **Exemplo de Requisição:**
```json
{
  "tipoPessoa": "juridica",
  "cnpj": "12.345.678/0001-95",
  "cpfResponsavel": "123.456.789-00",
  "nome": "Empresa Exemplo",
  "celular": "(11) 91234-5678",
  "telefone": "(11) 1234-5678",
  "email": "contato@exemplo.com",
  "confirmarEmail": "contato@exemplo.com",
  "endereco": {
    "cep": "12345-678",
    "logradouro": "Rua Exemplo",
    "numero": "100",
    "complemento": "Sala 101",
    "cidade": "São Paulo",
    "bairro": "Centro",
    "estado": "SP"
  },
  "termosDeUso": true
}
```
## Respostas

### 200 OK - Sucesso
Retorna uma mensagem de sucesso com o número do protocolo gerado.

```json
{
  "message": "Cadastrado com sucesso!",
  "protocolo": "123456789"
}
```

### 400 Bad Request
Retorna uma mensagem de erro se o ID fornecido não for válido ou se houver algum erro de validação nos campos.

```json
{
  "error": "Dados inválidos ou incompletos."
}
```

### 409 Conflict
Retorna uma mensagem de erro se o e-mail informado já estiver cadastrado.

```json
{
  "error": "E-mail já cadastrado."
}
```

### 500 Internal Server Error
Retorna uma mensagem de erro genérica em caso de falha no servidor.

```json
{
  "error": "Erro no servidor. Tente novamente mais tarde."
}
```

## Tratamento de Erros

- **Erro 500:** Se ocorrer um erro inesperado no servidor, será exibida uma modal com a mensagem genérica: "*Nome do usuário*. Tente novamente mais tarde".
- **Erro 409:** Se o e-mail já estiver cadastrado, uma modal informará o usuário sobre a duplicidade do cadastro.
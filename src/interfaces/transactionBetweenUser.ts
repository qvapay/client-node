/**
 * @Params
 * Puede utilizar el campo "to" con el uuid del usuario de destino, el email o el teléfono.
 */
export interface TransactionBetweenUser {
  to: string;
  amount: number;
  description: string;
}

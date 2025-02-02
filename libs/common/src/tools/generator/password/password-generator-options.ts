import { PasswordGenerationOptions } from "./password-generation-options";

/** Request format for credential generation.
 *  This type includes all properties suitable for reactive data binding.
 */
export type PasswordGeneratorOptions = PasswordGenerationOptions &
  PassphraseGenerationOptions & {
    /** The algorithm to use for credential generation.
     * Properties on @see PasswordGenerationOptions should be processed
     * only when `type === "password"`.
     * Properties on @see PassphraseGenerationOptions should be processed
     * only when `type === "passphrase"`.
     */
    type?: "password" | "passphrase";
  };

/** Request format for passphrase credential generation.
 *  The members of this type may be `undefined` when the user is
 *  generating a password.
 */
export type PassphraseGenerationOptions = {
  /** The number of words to include in the passphrase.
   * This value defaults to 4.
   */
  numWords?: number;

  /** The ASCII separator character to use between words in the passphrase.
   * This value defaults to a dash.
   * If multiple characters appear in the string, only the first character is used.
   */
  wordSeparator?: string;

  /** `true` when the first character of every word should be capitalized.
   * This value defaults to `false`.
   */
  capitalize?: boolean;

  /** `true` when a number should be included in the passphrase.
   * This value defaults to `false`.
   */
  includeNumber?: boolean;
};

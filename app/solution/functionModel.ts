/**
 * Describes's function's current status.
 */
export interface IFunctionModel {
   /**
    * Unique ID.
    */
   id: string;

   /**
    * Name.
    */
   name: string;

   /**
    * Describes the function's purpose.
    */
   description: string;

   /**
    * Total amount of memory allocation across all
    * instances of the function.
    */
   billingUsage: number;
}

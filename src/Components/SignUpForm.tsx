import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function SignUpForm () {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example")) // watch input value by passing the name of it

    return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="flex flex-col p-5 pt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue="E-mail" {...register("example")} />
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>E-mail required</span>}
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue="Password" {...register("example")} />
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>Password required</span>}
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}
"use client";
import {Form} from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Select } from "@heroui/select";
import { SelectItem } from "@heroui/select";
import { Checkbox } from "@heroui/checkbox";
import { Button } from "@heroui/button";

import { useState } from "react";

import { TriangleIcon } from "./icons";
import NextLink from "next/link";

const defaultInputProps = {
		base: "bg-red-500",
		radius: "none", 
		variant: "underlined",
		size: "lg",
}
const defaultSelectProps = {
	...defaultInputProps,
	disallowEmptySelection: true,
	selectorIcon: <span className="group-hover:scale-105"><TriangleIcon width="12" position="down"/></span>,
}

const defaultInputClassNames = {
		base: " my-1",
		label: "!text-gray font-form-label uppercase tracking-normal -mt-0.5",
		mainWrapper: "",
		innerWrapper: "py-20",
		inputWrapper: "h-14 min-h-14 bg-white border-t-1 border-b-1 border-t-stroke-ultralight border-b-stroke transition-all hover:border-t-beige hover:border-b-black hover:shadow-[0_3px_10px_0_rgba(0,0,0,0.1)]",
		input: "py-8 px-4 text-base",
		clearButton: "",
		helperWrapper: "",
		description: "",
		errorMessage: "text-sm",
}
const defaultSelectClassNames	= {
	base: "my-1",
	label: "!text-gray font-form-label uppercase tracking-normal -mt-0.5",
	mainWrapper: "group",
	trigger: "h-14 min-h-14 bg-white border-t-1 border-b-1 border-t-stroke-ultralight border-b-stroke transition-all hover:border-t-beige hover:border-b-black hover:shadow-[0_3px_10px_0_rgba(0,0,0,0.1)] !pr-4",
	innerWrapper: "",
	selectorIcon: "w-auto h-auto",
	value: "px-4 text-base",
	listboxWrapper: "p-0 !gap-0",
	listbox: "p-0 !gap-0",
	popoverContent: "p-0 shadow-[0_3px_10px_0_rgba(0,0,0,0.15)] !gap-0",
	helperWrapper: "",
	description: "",
	errorMessage: "",
	clearButton: "",
	endWrapper: "",
	endContent: "",
}
const defaultSelectItemClassNames = {
	base: "h-12 text-base font-base data-[hover=true]:bg-black data-[hover=true]:text-white transition-all not-last:border-b-1 border-b-stroke-ultraultralight data-[selected=true]:bg-black data-[selected=true]:text-white",
	wrapper: "h-10 transition-all",
	title: "px-4 text-base",
	description: "bg-yellow",
	selectedIcon: "mr-3 scale-150",
}

export default function ContactForm() {
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(null);
	const [errors, setErrors] = useState({});

	// Real-time password validation
	const getPasswordError = (value) => {
		if (value.length < 4) {
			return "Password must be 4 characters or more";
		}
		if ((value.match(/[A-Z]/g) || []).length < 1) {
			return "Password needs at least 1 uppercase letter";
		}
		if ((value.match(/[^a-z]/gi) || []).length < 1) {
			return "Password needs at least 1 symbol";
		}

		return null;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));

		// Custom validation checks
		const newErrors = {};

		// Password validation
		const passwordError = getPasswordError(data.password);

		if (passwordError) {
			newErrors.password = passwordError;
		}

		// Username validation
		if (data.name === "admin") {
			newErrors.name = "Nice try! Choose a different username";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);

			return;
		}

		if (data.terms !== "true") {
			setErrors({terms: "Please accept the terms"});

			return;
		}

		// Clear errors and submit
		setErrors({});
		setSubmitted(data);
	};

	return (
		<Form
			className="w-full justify-center items-center space-y-4"
			validationErrors={errors}
			onReset={() => setSubmitted(null)}
			onSubmit={onSubmit}
		>
			<div className="_form-wrapper
				w-full max-w-[50rem] flex flex-col gap-6 max-w-md
			">
				<div className="_input-flex-row
					flex gap-6 flex-wrap
					lg:gap-8
				">		
					<div className="_input-column
						basis-[calc(200rem/16)]
						grow-1
					">
						<Input
							{...defaultInputProps}
							isRequired
							errorMessage={({validationDetails}) => {
								if (validationDetails.valueMissing) {
								return "Prosím zadejte vaše křestní jméno";
								}

								return errors.name;
							}}
							label="Jméno"
							labelPlacement="outside"
							name="firstname"
							placeholder="Vaše jméno"
							classNames={defaultInputClassNames}
						/>
					</div>
					<div className="_input-column
						basis-[calc(200rem/16)]
						grow-1
					">
						<Input
							{...defaultInputProps}
							isRequired
							errorMessage={({validationDetails}) => {
								if (validationDetails.valueMissing) {
								return "Prosím zadejte vaše příjmení";
								}
							}}
							label="Příjmení"
							labelPlacement="outside"
							name="lastname"
							placeholder="Vaše příjmení"
							classNames={defaultInputClassNames}
						/>
					</div>
				</div>

				<Input		
					{...defaultInputProps}
					classNames={defaultInputClassNames}
					isRequired
					errorMessage={({validationDetails}) => {
						if (validationDetails.valueMissing) {
							return "Prosím zadejte vaši emailovou adresu";
						}
						if (validationDetails.typeMismatch) {
							return "Prosím zadejte platnou emailovou adresu obsahující zavináč a doménu";
						}
					}}
					label="emailová adresa"
					labelPlacement="outside"
					name="email"
					placeholder="Vyplňte Vaši emailovou adresu"
					type="email"
				/>

				{/* <Input
					isRequired
					errorMessage={getPasswordError(password)}
					isInvalid={getPasswordError(password) !== null}
					label="Password"
					labelPlacement="outside"
					name="password"
					placeholder="Enter your password"
					type="password"
					value={password}
					onValueChange={setPassword}
				/> */}
				<Select
					{...defaultSelectProps}
					classNames={defaultSelectClassNames}
					isRequired
					label="Typ tiskoviny"
					labelPlacement="outside"
					name="printtype"
					placeholder="Vyberte typ tiskoviny"
				>
					<SelectItem key="book" classNames={defaultSelectItemClassNames}>Kniha</SelectItem>
					<SelectItem key="thesis" classNames={defaultSelectItemClassNames}>Diplomová/bakalářská práce</SelectItem>
					<SelectItem key="other" classNames={defaultSelectItemClassNames}>Jiné</SelectItem>
				</Select>

				<Select
					{...defaultSelectProps}
					classNames={defaultSelectClassNames}
					isRequired
					label="Typ vazby"
					labelPlacement="outside"
					name="bindtype"
					placeholder="Vyberte typ vazby"
				>
					<SelectItem key="by_recommendation" classNames={defaultSelectItemClassNames}>Dle našeho doporučení</SelectItem>
					<SelectItem key="nit" classNames={defaultSelectItemClassNames}>Vazba nití</SelectItem>
					<SelectItem key="japonska" classNames={defaultSelectItemClassNames}>Japonská vazba</SelectItem>
					<SelectItem key="x" classNames={defaultSelectItemClassNames}>Vazba x</SelectItem>
					<SelectItem key="y" classNames={defaultSelectItemClassNames}>Vazba y</SelectItem>
				</Select>
				
				<Textarea
					classNames={{
						base: " my-1",
						label: "!text-gray font-form-label uppercase tracking-normal -mt-0.5",
						inputWrapper: " bg-white border-t-1 border-b-1 border-t-stroke-ultralight border-b-stroke transition-all hover:border-t-beige hover:border-b-black hover:shadow-[0_3px_10px_0_rgba(0,0,0,0.1)]",
						input: "py-2 px-4 text-base",
						clearButton: "",
						helperWrapper: "",
						description: "",
						errorMessage: "",
					}}
					{...defaultInputProps}
					label="Komentář"
					labelPlacement="outside"
					name="comment"
					placeholder="Místo pro Vaše speciální požadavky"
					rows={4}
				/>


				<Checkbox
					isRequired
					classNames={{
						base: "",
						wrapper: "",
						hiddenInput: "",
						icon:  "",
						label: "mt-0.5 ml-1 text-base",
					}}
					isInvalid={!!errors.terms}
					name="terms"
					validationBehavior="aria"
					value="true"
					onValueChange={() => setErrors((prev) => ({...prev, terms: undefined}))}
				>
					Souhlasím s <NextLink href="/podminky-zpracovani-osobnich-udaju" target="_blank" className="text-link underline hover:text-beige transition-colors relative z-10 pointer-events-auto">podmínkami zpracování osobních údajů</NextLink>
				</Checkbox>

				{errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

				<div className="flex gap-4 mt-6">
					<Button className="bg-black hover:bg-beige text-white font-base uppercase tracking-normal py-7 px-9" type="submit">
						Odeslat poptávku
					</Button>
				</div>
			</div>

			{submitted && (
				<div className="text-small text-default-500 mt-4">
					Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
				</div>
			)}
		</Form>
	);
}


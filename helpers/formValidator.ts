// Type Imports
import { ZodError, ZodType } from 'zod'

export const formValidator = <T>(formData: T, schema: ZodType<T>) => {
	try {
		return { data: schema.parse(formData) }
	} catch (error: any) {
		if (error instanceof ZodError) {
			const errorMessages: any = {}
			error.issues.forEach(issue => {
				const path = issue.path.join('.')
				if (!errorMessages[path]) {
					errorMessages[path] = issue.message
				}
			})
			return { errors: errorMessages }
		} else {
			return { errors: { generalError: 'An unexpected error occurred.' } }
		}
	}
}

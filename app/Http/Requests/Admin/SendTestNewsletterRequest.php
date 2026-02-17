<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SendTestNewsletterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'admin_id' => ['required', 'exists:users,id'],
        ];
    }

    public function messages(): array
    {
        return [
            'admin_id.required' => 'Veuillez sélectionner un administrateur.',
            'admin_id.exists' => 'L\'administrateur sélectionné n\'existe pas.',
        ];
    }
}

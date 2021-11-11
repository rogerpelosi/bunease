class Api::UploadsController < ApplicationController
 
  def prepare
    signature = Cloudinary::Utils.api_sign_request(params_to_sign, ENV['CLOUDINARY_API_SECRET'])
    render json: {
      signature: signature,
      api_key: ENV['CLOUDINARY_API_KEY'],
      upload_params: params_to_sign
    }
  end

  private

  def params_to_sign
    params.permit(:timestamp, :source, :upload_preset).to_h
  end
  
end

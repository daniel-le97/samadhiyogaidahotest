import { Value } from "sass";
import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";
import { update } from "../utils/Functions";
import { getAdmins } from "./AccountService";

class TestimonialsService {
  async getAllTestimonials() {
    const testimonials = await dbContext.Testimonials.find();
    return testimonials;
  }
  async deleteTestimonial(userId, testimonialId) {
    await getAdmins(userId);
    const testimonial = await this.getTestimonialById(testimonialId);
    // @ts-ignore
    await testimonial.remove();
    return testimonial;
    //
  }
  async createTestimonial(testimonialData, userId) {
    await getAdmins(userId);
    testimonialData.creatorId = userId;
    const testimonial = await dbContext.Testimonials.create(testimonialData);
    // populate
    return testimonial;
  }
  async getTestimonialById(id) {
    const testimonial = await dbContext.Testimonials.findById(id);
    if (!testimonial) {
      throw new BadRequest("unable to find testimonial");
    }
    return testimonial;
  }
  async updateTestimonial(testimonialId, testimonialData, userId) {
    await getAdmins(userId);
    let testimonial = await this.getTestimonialById(testimonialId);

    await update(testimonialData, testimonial);
    await testimonial.save();
    return testimonial;
  }
}

export const testimonialsService = new TestimonialsService();

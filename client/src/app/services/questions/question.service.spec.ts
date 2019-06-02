import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });

  it('should have postQuestion function',inject([QuestionService],(service:QuestionService)=>{
	expect(service.postQuestion).toBeTruthy();
  }))

  it('should have postAnswer function',inject([QuestionService],(service:QuestionService)=>{
    expect(service.postAnswer).toBeTruthy();
    }))



});
